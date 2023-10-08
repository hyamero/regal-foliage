import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoCartOutline } from "react-icons/io5";

type ProductModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  name: string;
  image: string;
  price: number;
};

export default function ProductModal({
  isOpen,
  closeModal,
  name,
  price,
  image,
}: ProductModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex w-full max-w-xl transform flex-col gap-5 overflow-hidden rounded-2xl border-2 border-primary bg-white p-10 text-left align-middle text-primary shadow-xl transition-all">
                <div className="flex flex-col gap-10 sm:grid sm:grid-cols-5">
                  <div className="h-60 w-full overflow-hidden sm:col-span-2 sm:h-full">
                    <img
                      id="bonsai-img"
                      src={image}
                      alt={name}
                      className="h-full w-full rounded-lg border-2 border-primary object-cover object-center sm:border-0"
                    />
                  </div>

                  <div className="col-span-3 flex flex-col justify-between gap-12">
                    <div>
                      <div className="potd-details mb-5 flex items-center justify-between gap-3 font-neue-light">
                        <h3 className="font-neue-light text-2xl sm:text-3xl">
                          {name}
                        </h3>
                        <p className="text-md whitespace-nowrap rounded-full border-[1.7px] border-primary px-5 font-neue-roman sm:text-lg">
                          ${price}
                        </p>
                      </div>
                      <p className="potd-details text-md font-neue-light sm:text-xl">
                        Meticulously crafted masterpiece boasts delicate
                        branches, sculpted over years to perfection.
                      </p>
                    </div>

                    <div id="potd-line" className="h-[1.7px] bg-primary" />
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-5 font-neue-roman sm:grid sm:grid-cols-5 sm:gap-12">
                  <div className="flex w-full gap-3 sm:col-span-2">
                    <button
                      type="button"
                      className="text-md flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-blue-100 px-4 py-2 font-neue-roman font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:text-lg"
                      onClick={closeModal}
                    >
                      <p>Details</p>
                    </button>

                    <button
                      type="button"
                      className="text-md flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 font-neue-roman font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:text-lg"
                      onClick={closeModal}
                    >
                      <p>Close</p>
                    </button>
                  </div>

                  <button
                    type="button"
                    className="text-md col-span-3 flex items-center justify-center gap-2 rounded-md border border-transparent bg-green-100 px-4 py-2 font-neue-roman font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 sm:text-lg"
                    onClick={closeModal}
                  >
                    <IoCartOutline className="text-2xl" />
                    <p>Add to Cart</p>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
