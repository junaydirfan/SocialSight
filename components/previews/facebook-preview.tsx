import type { FC } from "react"
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react"

interface FacebookPreviewProps {
  imageUrl: string
}

const FacebookPreview: FC<FacebookPreviewProps> = ({ imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-600 mr-2"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
        Facebook Previews
      </h3>

      <div className="p-4 space-y-6">
        {/* Profile Picture Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Profile Picture (170×170px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt="Facebook profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 hrs •{" "}
                  <span className="inline-block w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 align-middle"></span>
                </p>
              </div>
              <MoreHorizontal size={20} className="ml-auto text-gray-700 dark:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Post Image Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Post Image (1200×630px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    2 hrs •{" "}
                    <span className="inline-block w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 align-middle"></span>
                  </p>
                </div>
                <MoreHorizontal size={16} className="ml-auto text-gray-700 dark:text-gray-300" />
              </div>

              <p className="mb-3">Check out this amazing photo I took on my recent trip!</p>

              <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-3">
                <img src={imageUrl || "/placeholder.svg"} alt="Facebook post image" className="w-full h-auto" />
              </div>

              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 py-1 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <ThumbsUp size={12} className="text-white" />
                  </div>
                  <span>1.2K</span>
                </div>
                <div>
                  <span>234 comments • 45 shares</span>
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ThumbsUp size={18} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">Like</span>
                </button>
                <button className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                  <MessageCircle size={18} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">Comment</span>
                </button>
                <button className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Share2 size={18} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacebookPreview
