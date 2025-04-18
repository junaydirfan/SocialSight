import type { FC } from "react"
import { ArrowUp, ArrowDown, MessageSquare, Share2, Bookmark, Award } from "lucide-react"

interface RedditPreviewProps {
  imageUrl: string
}

const RedditPreview: FC<RedditPreviewProps> = ({ imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-orange-600 mr-2"
        >
          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"></path>
        </svg>
        Reddit Previews
      </h3>

      <div className="p-4 space-y-6">
        {/* Avatar Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Avatar (256×256px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0 bg-orange-500">
                <img src={imageUrl || "/placeholder.svg"} alt="Reddit avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium">u/username</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">12.5k karma • 2y</p>
              </div>
              <button className="ml-auto bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Post Image Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Post Image (1200×900px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Subreddit icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium">r/photography</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">• Posted by u/username 5 hours ago</p>
              </div>

              <h5 className="text-lg font-medium mb-3">I captured this amazing shot during my trip last weekend!</h5>

              <div className="rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 mb-3">
                <img src={imageUrl || "/placeholder.svg"} alt="Reddit post image" className="w-full h-auto" />
              </div>

              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                  <ArrowUp size={16} />
                  <span className="font-medium">3.2k</span>
                  <ArrowDown size={16} />
                </div>

                <button className="flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-full">
                  <MessageSquare size={16} />
                  <span>128 comments</span>
                </button>

                <button className="flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-full">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>

                <button className="flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-full">
                  <Award size={16} />
                  <span>Award</span>
                </button>

                <button className="flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-full ml-auto">
                  <Bookmark size={16} />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedditPreview
