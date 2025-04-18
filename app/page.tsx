"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Sun, Moon, Upload, X } from "lucide-react"
import YouTubePreview from "@/components/previews/youtube-preview"
import FacebookPreview from "@/components/previews/facebook-preview"
import InstagramPreview from "@/components/previews/instagram-preview"
import TwitterPreview from "@/components/previews/twitter-preview"
import RedditPreview from "@/components/previews/reddit-preview"
import PlatformSelector from "@/components/platform-selector"

type Platform = "youtube" | "facebook" | "instagram" | "twitter" | "reddit"

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activePlatform, setActivePlatform] = useState<Platform>("youtube")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Set initial dark mode on component mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    setImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] pointer-events-none"></div>

        <header className="border-b border-gray-800/50 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-teal-400 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              SocialSight
            </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-teal-400"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300">
                  Upload Your Image
                </span>
              </h2>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl">
                {!image ? (
                  <div
                    className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-teal-500 transition-all duration-300 group relative overflow-hidden"
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        fileInputRef.current?.click()
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label="Upload image"
                  >
                    <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/5 group-focus:bg-teal-500/10 transition-all duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:scale-110 group-focus:scale-110 group-focus:ring-4 group-focus:ring-teal-500/30 transition-all duration-300 border border-gray-600/50">
                        <Upload className="text-teal-400 w-8 h-8" />
                      </div>
                      <p className="mb-2 font-medium text-lg text-white">Click to upload an image</p>
                      <p className="text-sm text-gray-400">PNG, JPG, or GIF (Max 5MB)</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <img
                      src={image || "/placeholder.svg"}
                      alt="Uploaded preview"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-lg"></div>
                    <button
                      onClick={clearImage}
                      className="absolute top-2 right-2 bg-gray-800/70 text-white p-2 rounded-full hover:bg-teal-600/90 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      aria-label="Remove image"
                    >
                      <X size={20} />
                    </button>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                  aria-label="Upload image"
                />
              </div>
            </div>
          </section>

          {image && (
            <section className="preview-section animate-fade-in">
              <h2 className="text-2xl font-semibold mb-8 text-center text-white">
                <span className="inline-block pb-2 border-b-2 border-teal-500">Social Media Previews</span>
              </h2>

              <div className="mb-8">
                <PlatformSelector
                  activePlatform={activePlatform}
                  onChange={(platform) => setActivePlatform(platform as Platform)}
                />
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-2xl transition-all duration-300 animate-fade-in">
                  {activePlatform === "youtube" && <YouTubePreview imageUrl={image} />}
                  {activePlatform === "facebook" && <FacebookPreview imageUrl={image} />}
                  {activePlatform === "instagram" && <InstagramPreview imageUrl={image} />}
                  {activePlatform === "twitter" && <TwitterPreview imageUrl={image} />}
                  {activePlatform === "reddit" && <RedditPreview imageUrl={image} />}
                </div>
              </div>
            </section>
          )}
        </main>

        <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/50 py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">SocialSight - Preview your images across social media platforms</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
