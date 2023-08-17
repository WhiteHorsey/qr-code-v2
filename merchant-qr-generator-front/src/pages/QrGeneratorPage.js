import React, { useState } from "react";
import { QrGeneratorForm } from "../forms";
import { NavBar, NotificationItem } from "../components";

function QrGeneratorPage() {
  const [notifications, setNotifications] = useState([]);
  return (
    <div>
      <NavBar />
      <section className="dark:bg-gray-900 grid grid-cols-2 gap-4 mt-10">
        <div className="items-center justify-center flex flex-col">
          <h3 className="text-xl">BCP QR GENERATOR</h3>
          <QrGeneratorForm setNotifications={setNotifications} />
        </div>
        <div className="items-center flex flex-col mr-5">
          <h3 className="text-xl mb-6">NOTIFICATIONS</h3>
          <div className="w-full flex flex-col mx-auto justify-center">
            {notifications?.map((item, index) => (
              <NotificationItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default QrGeneratorPage;
