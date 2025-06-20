'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

// Mock data for healthcare resources in NWA
const healthcareResources = [
  {
    id: 1,
    name: 'Restoring Hope Clinic',
    type: 'Free Clinic',
    address: '123 Hope Street, Bentonville, AR 72712',
    phone: '(479) 555-1234',
    hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-2PM',
    services: ['Primary Care', 'Dental', 'Mental Health'],
    coordinates: [-94.2088, 36.3729], // Bentonville, AR
    website: 'https://restoringhopeclinic.org'
  },
  {
    id: 2,
    name: 'Northwest Arkansas Free Health Center',
    type: 'Free Clinic',
    address: '456 Care Ave, Fayetteville, AR 72701',
    phone: '(479) 555-2345',
    hours: 'Mon-Thu: 9AM-4PM',
    services: ['Primary Care', 'Pharmacy'],
    coordinates: [-94.1574, 36.0822], // Fayetteville, AR
    website: '#'
  },
  {
    id: 3,
    name: 'Rogers Community Health Center',
    type: 'Community Health Center',
    address: '789 Health Blvd, Rogers, AR 72756',
    phone: '(479) 555-3456',
    hours: 'Mon-Fri: 7AM-6PM',
    services: ['Primary Care', 'Dental', 'Pediatrics'],
    coordinates: [-94.1185, 36.3320], // Rogers, AR
    website: '#'
  },
  {
    id: 4,
    name: 'Springdale Family Clinic',
    type: 'Sliding Scale Clinic',
    address: '321 Family Dr, Springdale, AR 72764',
    phone: '(479) 555-4567',
    hours: 'Mon-Fri: 8AM-5PM',
    services: ['Primary Care', 'Women\'s Health'],
    coordinates: [-94.1288, 36.1867], // Springdale, AR
    website: '#'
  }
]

export default function ResourceMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [selectedResource, setSelectedResource] = useState<typeof healthcareResources[0] | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    // Check if Mapbox token is available
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    if (!mapboxToken) {
      console.warn('Mapbox token not found. Map will not be displayed.')
      setMapError(true)
      return
    }

    mapboxgl.accessToken = mapboxToken

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-94.1574, 36.1867], // Center on NWA
        zoom: 10,
        attributionControl: false
      })

      map.current.on('load', () => {
        setMapLoaded(true)
        
        // Add markers for each resource
        healthcareResources.forEach((resource) => {
          // Create custom marker element
          const markerElement = document.createElement('div')
          markerElement.className = 'custom-marker'
          markerElement.style.cssText = `
            width: 30px;
            height: 30px;
            background-color: #5FB0B7;
            border: 2px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
          `
          
          // Add icon to marker
          const icon = document.createElement('div')
          icon.innerHTML = '🏥'
          icon.style.fontSize = '14px'
          markerElement.appendChild(icon)

          // Create popup content
          const popupContent = `
            <div class="p-3 max-w-xs">
              <h3 class="font-semibold text-gray-900 mb-1">${resource.name}</h3>
              <p class="text-sm text-gray-600 mb-2">${resource.type}</p>
              <div class="space-y-1 text-xs text-gray-600">
                <div class="flex items-start">
                  <span class="mr-1">📍</span>
                  <span>${resource.address}</span>
                </div>
                <div class="flex items-center">
                  <span class="mr-1">📞</span>
                  <span>${resource.phone}</span>
                </div>
                <div class="flex items-center">
                  <span class="mr-1">🕒</span>
                  <span>${resource.hours}</span>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-xs font-medium text-gray-700 mb-1">Services:</p>
                <div class="flex flex-wrap gap-1">
                  ${resource.services.map(service => 
                    `<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">${service}</span>`
                  ).join('')}
                </div>
              </div>
            </div>
          `

          const popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: true,
            closeOnClick: false,
            maxWidth: '300px',
            className: 'mobile-friendly-popup'
          }).setHTML(popupContent)

          // Add marker to map
          const marker = new mapboxgl.Marker(markerElement)
            .setLngLat(resource.coordinates as [number, number])
            .setPopup(popup)
            .addTo(map.current!)

          // Handle marker click
          markerElement.addEventListener('click', () => {
            setSelectedResource(resource)
          })
        })
      })

      map.current.on('error', () => {
        setMapError(true)
      })

    } catch (error) {
      console.error('Error initializing map:', error)
      setMapError(true)
    }

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  if (mapError) {
    return (
      <div className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-center p-8">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Map Unavailable
          </h3>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            Unable to load the interactive map. Please see the resource list below.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="relative">
        <div 
          ref={mapContainer} 
          className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        />
        {!mapLoaded && !mapError && (
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
              <p className="text-gray-500 dark:text-gray-300">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      {/* Resource List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {healthcareResources.map((resource) => (
          <div
            key={resource.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedResource?.id === resource.id
                ? 'border-brand-primary bg-brand-light dark:bg-gray-800'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
            onClick={() => setSelectedResource(resource)}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {resource.name}
              </h3>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                {resource.type}
              </span>
            </div>
            
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{resource.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href={`tel:${resource.phone}`} className="hover:text-brand-primary">
                  {resource.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{resource.hours}</span>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Services:</p>
              <div className="flex flex-wrap gap-1">
                {resource.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {resource.website !== '#' && (
              <a
                href={resource.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-brand-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Map Instructions */}
      <div className="bg-brand-light dark:bg-gray-800 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
          How to Use This Map
        </h4>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>• Click on map markers to see detailed information about each healthcare resource</li>
          <li>• Click on resource cards below to highlight them on the map</li>
          <li>• Use the map controls to zoom in/out and navigate the area</li>
          <li>• Contact resources directly using the provided phone numbers</li>
        </ul>
      </div>
    </div>
  )
} 