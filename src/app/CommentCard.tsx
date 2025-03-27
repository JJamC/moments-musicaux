"use client";
import { handleCommentDelete } from "~/server/api/routers/procedures/comments.procedures";
import { useAuth } from "./context/UserContext";
import { api } from "~/trpc/react";
import { useState } from "react";

interface CommentCardProps {
  comment: {
    articleId: number;
    authorId: number;
    body: string;
    createdAt: string;
    id: number;
    votes: number;
  };
}

export default function CommentCard(props: CommentCardProps) {
  const { comment } = props;

  const { isUser, userProfile, login, logout } = useAuth();
  const [edit, setEdit] = useState(comment.body);
  const [editorOpen, setEditorOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false)
  const [renderedVotes, setRenderedVotes] = useState(comment.votes)

  // Call useUtils() at the top level of the component, outside of the mutation.
  const utils = api.useUtils();

  const commentDeletion = api.comment.handleCommentDelete.useMutation({
    onSuccess: () => {
      utils.invalidate();
    },
  });
  const commentUpdate = api.comment.editComment.useMutation({
    onSuccess: () => {
      utils.invalidate();
    },
  });
  const commentUpVote = api.comment.upVoteCommentVotes.useMutation()

  const handleDelete = async () => {
    try {
      if (typeof comment.id === "number") {
        setDeleting(true);
        await commentDeletion.mutateAsync({ id: comment.id });
      }
    } catch (err) {
      setDeleting(false);
    }
  };

  const handleUpVote = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setRenderedVotes((currVotes) => currVotes + 1)
    try{
    await commentUpVote.mutateAsync({id: comment.id})
    setHasVoted(true)
    }
    catch(err) {
      setRenderedVotes((currVotes) => currVotes - 1)
      setHasVoted(false)
    }
  }

  const handleDownVote = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setRenderedVotes((currVotes) => currVotes - 1)
    try{
    await commentUpVote.mutateAsync({id: comment.id})
    setHasVoted(false)
    }
    catch(err) {
      setRenderedVotes((currVotes) => currVotes + 1)
      setHasVoted(true)
    }
  }

  const openEditBox = () => {
    setEditorOpen(true);
  };

  const sendEditComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await commentUpdate.mutateAsync({ commentId: comment.id, body: edit });
      setEditorOpen(false);
    } catch (err) {
      setEditorOpen(true);
    }
  };

  return (
    <section className="relative py-7">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-14">
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-end justify-start gap-2.5 rounded-3xl border border-gray-200 bg-white p-5 lg:p-8">
              <div className="flex w-full flex-col items-end justify-start gap-3.5">
                <div className="inline-flex w-full items-center justify-between">
                  <div className="flex w-full items-center justify-start gap-2.5">
                    <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-slate-400">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710237485.png"
                        alt="Danial Harrison image"
                      />
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-sm font-semibold leading-snug text-gray-900">
                        {comment.authorId}
                      </h5>
                      <h6 className="text-xs font-normal leading-5 text-gray-500">
                        {comment.createdAt}
                      </h6>
                    </div>
                  </div>
                  <div className="group flex items-center justify-end">
                    <div className="flex items-center justify-center rounded-xl border border-gray-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-green-600">
                    {hasVoted?                         
                    <button 
                        onClick={((e) => {
                          handleDownVote(e)
                        })}
                        className="text-base font-semibold leading-relaxed text-gray-400 transition-all duration-700 ease-in-out text-green-600">
                                                  <svg
                          className="fill-white text-gray-400 transition-all duration-700 ease-in-out fill-green-600 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                            stroke="currentColor"
                          />
                        </svg>
                        </button>
                         : 
                        <button 
                        onClick={((e) => {
                          handleUpVote(e)
                        })}
                        className="text-base font-semibold leading-relaxed text-gray-400 transition-all duration-700 ease-in-out group-hover:text-green-600">
                                               <svg
                          className="fill-white text-gray-400 transition-all duration-700 ease-in-out group-hover:fill-green-600 group-hover:text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                            stroke="currentColor"
                          />
                        </svg>
                        </button>
                        }
                      <div className="flex items-center justify-center px-2">
<h6>
  {renderedVotes}
</h6>
                      </div>
                    </div>
                  </div>
                </div>
                {editorOpen ? (
                  <form
                    onSubmit={(e) => {
                      sendEditComment(e);
                    }}
                  >
                    <textarea
                      className="mb-4 w-full resize-none text-wrap rounded-lg border border-gray-300 bg-white px-5 py-3 text-lg leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Leave a comment..."
                      name="comment"
                      value={edit}
                      onChange={(e) => {
                        setEdit(e.target.value);
                      }}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    >
                      Post
                    </button>
                  </form>
                ) : (
                  <p className="text-sm font-normal leading-snug text-gray-800">
                    {comment.body}
                  </p>
                )}

                {userProfile.id === comment.authorId ? (
                  <div className="inline-flex w-full items-start justify-end gap-6">
                    <button className="flex w-full items-center justify-center rounded-xl border border-gray-200 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-gray-200 sm:w-fit">
                      {deleting ? (
                        <span
                          onClick={handleDelete}
                          className="px-2 text-base font-semibold leading-relaxed text-gray-900"
                        >
                          Deleting...
                        </span>
                      ) : (
                        <span
                          onClick={handleDelete}
                          className="px-2 text-base font-semibold leading-relaxed text-gray-900"
                        >
                          Delete
                        </span>
                      )}
                    </button>
                    <button
                      onClick={openEditBox}
                      className="flex w-full items-center justify-center rounded-xl bg-green-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-green-700 sm:w-fit"
                    >
                      <span className="px-2 py-px text-base font-semibold leading-relaxed text-white">
                        Edit
                      </span>
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
