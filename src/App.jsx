import { useState, useEffect } from 'react'
import { DAYS, TODO } from './data.js'

const TODO_STORAGE_KEY = 'hm-todo-done-v1'

function loadDone() {
  try {
    return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function timeLine(a) {
  const parts = []
  if (a.meetingTime) {
    parts.push(a.meetingPlace ? `${a.meetingTime} · ${a.meetingPlace}` : a.meetingTime)
  }
  if (a.startEnd) parts.push(a.startEnd)
  return parts.join(' · ')
}

function ActivityButton({ activity, onOpen }) {
  const cls =
    'tour-item tour-item--tappable' +
    (activity.travel ? ' tour-item--travel' : '') +
    (activity.link ? ' tour-item--booking' : '') +
    (activity.extra ? ' tour-item--extra' : '')
  const tl = timeLine(activity)
  return (
    <button className={cls} onClick={() => onOpen(activity)}>
      <div className="tour-name">
        {activity.extra && <span className="tour-extra">Extra</span>}
        {activity.actionBadge && <span className="tour-rebook">{activity.actionBadge}</span>}
        {activity.name}
        <span className="tour-tap-hint">›</span>
      </div>
      {activity.operator && <div className="tour-operator">{activity.operator}</div>}
      {tl && <div className="tour-time">{tl}</div>}
      {activity.link && <span className="tour-reserva">Reserva</span>}
    </button>
  )
}

function DayCard({ day, onOpen }) {
  return (
    <div className="day-card">
      <div className="day-card-header">
        <div className="day-date-block">
          <div className="day-month">{day.month}</div>
          <div className="day-num">{day.num}</div>
          <div className="day-dow">{day.dow}</div>
        </div>
        <div className="day-port-block">
          <div className="day-port">{day.port}</div>
          <span className={`day-type-badge type-${day.type}`}>{day.typeLabel}</span>
        </div>
        {day.mapsUrl && (
          <a
            className="day-maps-btn"
            href={day.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir la ruta completa del día en Google Maps"
          >
            🧭 Ruta del día
          </a>
        )}
      </div>
      <div className="day-card-body">
        <div>
          <div className="tours-label">Actividades del día</div>
          {day.activities.map((a, i) => (
            <ActivityButton key={i} activity={a} onOpen={onOpen} />
          ))}
        </div>
        <div className="notes-row">
          <div className="notes-label">Notas</div>
          <div>{day.notes}</div>
        </div>
      </div>
    </div>
  )
}

function TodoList() {
  const [done, setDone] = useState(loadDone)

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(done))
  }, [done])

  const toggle = (key) => setDone((prev) => ({ ...prev, [key]: !prev[key] }))

  const totalItems = TODO.reduce((sum, g) => sum + g.items.length, 0)
  const doneCount = TODO.reduce(
    (sum, g) => sum + g.items.filter((_, i) => done[`${g.city}-${i}`]).length,
    0
  )

  return (
    <div className="todo-page">
      <div className="todo-hero">
        <div className="todo-title">To Do List</div>
        <div className="todo-progress-bar">
          <div
            className="todo-progress-fill"
            style={{ width: totalItems ? `${(doneCount / totalItems) * 100}%` : '0%' }}
          />
        </div>
        <div className="todo-progress-label">{doneCount} de {totalItems} completado{doneCount === 1 ? '' : 's'}</div>
      </div>

      {TODO.map((group) => (
        <div className="todo-section" key={group.city}>
          <div className="todo-section-title">{group.city}</div>
          {group.items.map((item, i) => {
            const key = `${group.city}-${i}`
            const isDone = !!done[key]
            return (
              <div
                key={key}
                className={'todo-item' + (isDone ? ' todo-item--done' : '')}
                onClick={() => toggle(key)}
              >
                <input type="checkbox" checked={isDone} readOnly />
                <span className="todo-item-text">{item}</span>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function Modal({ activity, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const tl = timeLine(activity)
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Cerrar" onClick={onClose}>✕</button>
        <div className="modal-title">{activity.name}</div>
        {activity.extra && <span className="modal-extra">Actividad extra · opcional</span>}
        {activity.operator && <div className="modal-operator">{activity.operator}</div>}
        {tl && <div className="modal-time">{tl}</div>}
        {activity.description && (
          <div className="modal-section">
            <div className="modal-section-label">Detalle</div>
            <div className="modal-body-text">{activity.description}</div>
          </div>
        )}
        {activity.link && (
          <div className="modal-section">
            <div className="modal-section-label">Reserva</div>
            <a className="modal-reserva" href={activity.link} target="_blank" rel="noopener noreferrer">
              Reserva
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('itinerary')

  return (
    <div className="app">
      <div className="hero">
        <div className="hero-eyebrow">Luna de Miel</div>
        <div className="hero-h1">Nueva Zelanda</div>
        <div className="hero-sub">Auckland &amp; Rotorua</div>
        <div className="hero-dates">11 – 14 de Diciembre, 2026</div>
        <div className="hero-hotels">
          Hotel InterContinental · Auckland (11–12 Dic)
          <br />
          Black Swan Lakeside Boutique Hotel · Rotorua (12–14 Dic)
        </div>
      </div>

      <div className="tab-bar">
        <button
          className={'tab-btn' + (tab === 'itinerary' ? ' tab-btn--active' : '')}
          onClick={() => setTab('itinerary')}
        >
          Itinerario
        </button>
        <button
          className={'tab-btn' + (tab === 'todo' ? ' tab-btn--active' : '')}
          onClick={() => setTab('todo')}
        >
          To Do List
        </button>
      </div>

      {tab === 'itinerary' && (
        <>
          <a className="map-link" href="mapa.html">🗺 Ver mapa de la ruta</a>

          <div className="days-list">
            {DAYS.map((day, i) => (
              <DayCard key={i} day={day} onOpen={setSelected} />
            ))}
          </div>

          <div className="footer">
            Toca cualquier actividad para ver el detalle y el enlace de reserva.
            <br />
            Los horarios de traslado y almuerzo son aproximados.
          </div>
        </>
      )}

      {tab === 'todo' && <TodoList />}

      {selected && <Modal activity={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
