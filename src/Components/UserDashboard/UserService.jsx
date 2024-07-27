import { useRef } from "react";
import SendMony from "./SendMony/SendMony";
import CashOut from "./CashOut/CashOut";
import CashIn from "./Cashin/CashIn";
import UserTranHistory from "./UserTrabsectionHistory/UserTranHistory";

const UserService = () => {
    const sendMoneyModalRef = useRef(null);
    const cashOutModalRef = useRef(null);
    const cashInModalRef = useRef(null);
    const historyModalRef = useRef(null);

    // SendMoney
    const handleOpenSendMoneyModal = () => {
        if (sendMoneyModalRef.current) {
            sendMoneyModalRef.current.showModal();
        }
    };

    const handleCloseSendMoneyModal = () => {
        if (sendMoneyModalRef.current) {
            sendMoneyModalRef.current.close();
        }
    };

    // CashOut
    const handleOpenCashOutModal = () => {
        if (cashOutModalRef.current) {
            cashOutModalRef.current.showModal();
        }
    };

    const handleCloseCashOutModal = () => {
        if (cashOutModalRef.current) {
            cashOutModalRef.current.close();
        }
    };

    // Cash In
    const handleOpenCashInModal = () => {
        if (cashInModalRef.current) {
            cashInModalRef.current.showModal();
        }
    };

    const handleCloseCashInModal = () => {
        if (cashInModalRef.current) {
            cashInModalRef.current.close();
        }
    };

    // Transection History
    const handleOpenHistoryModal = () => {
        if (historyModalRef.current) {
            historyModalRef.current.showModal();
        }
    };

    const handleCloseHistoryModal = () => {
        if (historyModalRef.current) {
            historyModalRef.current.close();
        }
    };

    return (
        <div>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                            ReadyPay <span className="text-blue-600">User</span> Service
                        </h2>
                    </div>

                    <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6 md:grid-cols-2">

                        {/* Send Money section */}
                        <section className="rounded-3xl shadow-2xl">
                            <div className="p-8 text-center justify-center grid sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                    Enjoy simple send money
                                </p>
                                <img
                                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3qYpvG1AQGFV-yGuzKg6ETKCybf_2NnQBZBXmUtpVLmRVPoeL"
                                    className="rounded-3xl p-2 h-60 w-60"
                                    alt=""
                                />
                                <button
                                    className="mt-4 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                                    onClick={handleOpenSendMoneyModal}
                                >
                                    Send Money
                                </button>
                                <dialog
                                    id="sendMoneyModal"
                                    ref={sendMoneyModalRef}
                                    className="modal modal-bottom sm:modal-middle bg-fuchsia-500"
                                >
                                    <div className="modal-box bg-white">
                                        <div>
                                            <SendMony onSuccess={handleCloseSendMoneyModal} />
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn btn-primary">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </section>

                        {/* Cash Out section */}
                        <section className="rounded-3xl shadow-2xl">
                            <div className="p-8 text-center justify-center grid sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                    Start cashout process
                                </p>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8i1mo2oHsRkkt3hQTqNdKc-Cu3kwEbkOBYg&usqp=CAU"
                                    className="rounded-3xl p-2 h-60 w-60"
                                    alt=""
                                />
                                <button
                                    className="mt-4 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                                    onClick={handleOpenCashOutModal}
                                >
                                    Cashout
                                </button>
                                <dialog
                                    id="cashOutModal"
                                    ref={cashOutModalRef}
                                    className="modal modal-bottom sm:modal-middle bg-fuchsia-500"
                                >
                                    <div className="modal-box bg-white">
                                        <div>
                                            <CashOut onSuccess={handleCloseCashOutModal} />
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn btn-primary">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </section>

                        {/* Cash In section */}
                        <section className="rounded-3xl shadow-2xl">
                            <div className="p-8 text-center justify-center grid sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                    Send request agent
                                </p>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtck2dPYHM0bEeeFsk1FGW0dvQkJ-XckQRiA&usqp=CAU"
                                    className="rounded-3xl p-2 h-60 w-60"
                                    alt=""
                                />
                                <button
                                    className="mt-4 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                                    onClick={handleOpenCashInModal}
                                >
                                    Cash In
                                </button>
                                <dialog
                                    id="cashInModal"
                                    ref={cashInModalRef}
                                    className="modal modal-bottom sm:modal-middle bg-fuchsia-500"
                                >
                                    <div className="modal-box bg-white">
                                        <div>
                                            <CashIn onSuccess={handleCloseCashInModal} />
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn btn-primary">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </section>

                        {/* Transection History section */}
                        <section className="rounded-3xl shadow-2xl">
                            <div className="p-8 text-center justify-center grid sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                    View Transection History
                                </p>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzA2pYM8BeANaQ9QpyGNqAtbVGDP2E1MYtOw&usqp=CAU"
                                    className="rounded-3xl p-2 h-60 w-60"
                                    alt=""
                                />
                                <button
                                    className="mt-4 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                                    onClick={handleOpenHistoryModal}
                                >
                                    Transection History
                                </button>
                                <dialog
                                    id="historyModal"
                                    ref={historyModalRef}
                                    className="modal modal-bottom sm:modal-middle bg-fuchsia-500"
                                >
                                    <div className="modal-box bg-white">
                                        <div>
                                            {/* Replace CashIn with your transaction history component */}
                                            <UserTranHistory onSuccess={handleCloseHistoryModal} />
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn btn-primary">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserService;
