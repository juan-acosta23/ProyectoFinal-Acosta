import { useState } from 'react'
import './CheckoutForm.css'

function CheckoutForm({ onConfirm, loading }) {
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
    
    // Limpiar error del campo cuando se empieza a escribir
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!buyer.name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    } else if (buyer.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    }

    if (!buyer.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio'
    } else if (!/^\d{8,15}$/.test(buyer.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'El teléfono debe tener entre 8 y 15 dígitos'
    }

    if (!buyer.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyer.email)) {
      newErrors.email = 'El email no tiene un formato válido'
    }

    if (!buyer.confirmEmail.trim()) {
      newErrors.confirmEmail = 'Debes confirmar tu email'
    } else if (buyer.email !== buyer.confirmEmail) {
      newErrors.confirmEmail = 'Los emails no coinciden'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const buyerData = {
        name: buyer.name.trim(),
        phone: buyer.phone.trim(),
        email: buyer.email.trim()
      }
      onConfirm(buyerData)
    }
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Información Personal</h3>
        
        <div className="form-group">
          <label htmlFor="name">Nombre Completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            placeholder="Ingresa tu nombre completo"
            disabled={loading}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
            placeholder="Ingresa tu teléfono"
            disabled={loading}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder="tu@email.com"
            disabled={loading}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar Email *</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={buyer.confirmEmail}
            onChange={handleChange}
            className={errors.confirmEmail ? 'error' : ''}
            placeholder="Confirma tu email"
            disabled={loading}
          />
          {errors.confirmEmail && <span className="error-text">{errors.confirmEmail}</span>}
        </div>
      </div>

      <button 
        type="submit" 
        className={`submit-button ${loading ? 'loading' : ''}`}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="spinner-small"></div>
            Procesando pedido...
          </>
        ) : (
          'Confirmar Pedido'
        )}
      </button>

      <p className="form-note">
        * Campos obligatorios
      </p>
    </form>
  )
}

export default CheckoutForm