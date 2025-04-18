import type { FC } from "react"
import { MessageCircle, Repeat2, Heart, BarChart2, Share } from "lucide-react"

interface TwitterPreviewProps {
  imageUrl: string
}

const TwitterPreview: FC<TwitterPreviewProps> = ({ imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-sky-500 mr-2"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
        X (Twitter) Previews
      </h3>

      <div className="p-4 space-y-6">
        {/* Profile Picture Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Profile Picture (400×400px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt="Twitter profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Display Name</p>
                <p className="text-gray-500 dark:text-gray-400">@username</p>
              </div>
              <button className="ml-auto bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-sm font-medium">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Tweet Image Preview */}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tweet Image (1200×675px)</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-3">
              <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-medium">Display Name</p>
                    <p className="text-gray-500 dark:text-gray-400">@username • 2h</p>
                  </div>
                  <p className="mb-3">Just captured this amazing moment! What do you think? #photography</p>

                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-3">
                    <img src={imageUrl || "/placeholder.svg"} alt="Tweet image" className="w-full h-auto" />
                  </div>

                  <div className="flex justify-between text-gray-500 dark:text-gray-400 pt-2">
                    <button className="flex items-center gap-1 hover:text-blue-500">
                      <MessageCircle size={18} />
                      <span>42</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500">
                      <Repeat2 size={18} />
                      <span>128</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-500">
                      <Heart size={18} />
                      <span>1.2K</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500">
                      <BarChart2 size={18} />
                      <span>24.5K</span>
                    </button>
                    <button className="hover:text-blue-500">
                      <Share size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwitterPreview
