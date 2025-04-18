import type { FC } from "react"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"

interface InstagramPreviewProps {
  imageUrl: string
}

const InstagramPreview: FC<InstagramPreviewProps> = ({ imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-pink-600 mr-2"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
        </svg>
        Instagram Previews
      </h3>

      <div className="p-4 space-y-6">
        {/* Profile Picture Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Profile Picture (110×110px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 border-2 border-pink-500 p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Instagram profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-medium">username</p>
                <p className="text-sm">Your Story</p>
              </div>
            </div>
          </div>
        </div>

        {/* Post Image Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Post Image (1080×1080px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium">username</p>
                <MoreHorizontal size={16} className="ml-auto text-gray-700 dark:text-gray-300" />
              </div>

              <div className="aspect-square bg-black mb-3">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex justify-between mb-2">
                <div className="flex gap-3">
                  <Heart size={24} className="text-gray-700 dark:text-gray-300" />
                  <MessageCircle size={24} className="text-gray-700 dark:text-gray-300" />
                  <Send size={24} className="text-gray-700 dark:text-gray-300" />
                </div>
                <Bookmark size={24} className="text-gray-700 dark:text-gray-300" />
              </div>

              <p className="font-medium mb-1">12,345 likes</p>
              <p>
                <span className="font-medium">username</span>
                <span className="ml-1">Enjoying the beautiful view! #travel #adventure</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">View all 123 comments</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">2 HOURS AGO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramPreview
