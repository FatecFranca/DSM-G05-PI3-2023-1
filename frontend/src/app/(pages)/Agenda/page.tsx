"use client";

import React, { useEffect, useRef, useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useMemo } from "react";
import { useAgendaService } from "@/app/services/agenda.service";

type Eventos = {
  id?: string;
  title?: string;
  start?: string;
  end?: string;
};

const DragAndDropCalendar = withDragAndDrop(Calendar);

const Agenda = () => {
  const defaultDate = useMemo(() => new Date(), []);
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const serviceAgenda = useAgendaService();
  const shouldLog = useRef(true);

  function SetarEventos() {
    useEffect(() => {
      if (shouldLog.current) {
        shouldLog.current = false;
        serviceAgenda.GETALL().then((res) => {
          for (let i = 0; i < res.length; i++) {
            //@ts-ignore
            setEvents((prev) => [
              ...prev,
              {
                id: res[i].id,
                title: res[i].nome,
                start: res[i].data,
                end: res[i].data,
              },
            ]);
          }
        });
      }
    }, []);
  }

  SetarEventos();
  return (
    <div className="h-full px-8 py-12 ml-24 min-h-screen mt-16">
      <div className="flex">
        <div className="w-3/4">
          <DragAndDropCalendar
            defaultDate={defaultDate}
            events={events}
            defaultView={Views.MONTH}
            localizer={localizer}
            resizable
            popup
            selectable
            showAllEvents
          />
        </div>
        <div className="w-1/4 rounded-md ml-12 min-h-screen flex flex-col">
          <div className="bg-yellow p-3 rounded-tl-full rounded-tr-full">
            <h1 className="text-black text-center text-2xl">Programação</h1>
          </div>
          <div className="bg-blackMain min-h-screen p-3">
            {events.map((val: Eventos) => (
              <>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-whiteMain">
                    {moment(val.start).format("DD/MM/YYYY")}
                  </h1>
                  <h1 className="text-whiteMain">{val.title}</h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
