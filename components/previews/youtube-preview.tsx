import type { FC } from "react"
import { Bell, ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from "lucide-react"

interface YouTubePreviewProps {
  imageUrl: string
}

const YouTubePreview: FC<YouTubePreviewProps> = ({ imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-red-600 mr-2"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
        YouTube Previews
      </h3>

      <div className="p-4 space-y-6">
        {/* Channel Avatar Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Channel Avatar (180×180px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt="YouTube channel avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Channel Name</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1.2M subscribers</p>
              </div>
              <button className="ml-auto bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Subscribe
              </button>
              <Bell size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Video Thumbnail Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Video Thumbnail (1280×720px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="aspect-video bg-black">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt="YouTube video thumbnail"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-3">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Channel avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-medium line-clamp-2">Video Title: How to Create Amazing Content</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Channel Name</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">120K views • 2 days ago</p>
                </div>
              </div>
              <div className="flex mt-4 justify-between">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full">
                    <ThumbsUp size={16} />
                    <span>12K</span>
                  </button>
                  <button className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full">
                    <ThumbsDown size={16} />
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full">
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full">
                    <Download size={16} />
                  </button>
                  <button className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouTubePreview
