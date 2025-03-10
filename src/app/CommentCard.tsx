
interface CommentCardProps {
    comment: {
    articleId: number,
    authorId: number,
    body: string,
    createdAt: string,
    id: number,
    votes: number
  }
}

export default function CommentCard(props: CommentCardProps) {
    const {comment} = props

    return(
<section className="py-24 relative">
<div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">Comments</h2>
        <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div
                className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-end gap-2.5 flex">
                <div className="w-full flex-col justify-start items-end gap-3.5 flex">
                    <div className="w-full justify-between items-center inline-flex">
                        <div className="w-full justify-start items-center gap-2.5 flex">
                            <div
                                className="w-10 h-10 bg-slate-400 rounded-full justify-start items-start gap-2.5 flex">
                                <img className="w-10 h-10 rounded-full object-cover"
                                    src="https://pagedone.io/asset/uploads/1710237485.png"
                                    alt="Danial Harrison image" />
                            </div>
                            <div className="flex-col justify-start items-start gap-1 inline-flex">
                                <h5 className="text-gray-900 text-sm font-semibold leading-snug">{comment.authorId}
                                </h5>
                                <h6 className="text-gray-500 text-xs font-normal leading-5">{comment.createdAt}</h6>
                            </div>
                        </div>
                        <div className="group justify-end items-center flex">
                            <div
                                className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-green-600 transition-all duration-700 ease-in-out  justify-center items-center flex">
                                <a href="" className="">
                                    <svg className="group-hover:text-green-600 text-gray-400 group-hover:fill-green-600 fill-white transition-all duration-700 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                                            stroke="currentColor" />
                                    </svg>
                                </a>
                                <div className="px-2 justify-center items-center flex">
                                    <h6
                                        className="group-hover:text-green-600 text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                                        {comment.votes}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">{comment.body}</p>
                    <div className="w-full justify-end items-start gap-6 inline-flex">
                        <button
                            className="sm:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-gray-200 hover:border-transparent transition-all duration-700 ease-in-out border border-gray-200 justify-center items-center flex">
                            <span
                                className="px-2 text-gray-900 text-base font-semibold leading-relaxed">Delete</span>
                        </button>
                        <button
                            className="sm:w-fit w-full px-5 py-2.5 bg-green-600 hover:bg-green-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            <span
                                className="px-2 py-px text-white text-base font-semibold leading-relaxed">Edit</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
                                    
    )

}