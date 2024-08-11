'use client'

import {
  Alert, Button, Form, FormControl, InputGroup,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock, faFile, faImage } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import InputGroupText from 'react-bootstrap/InputGroupText'
import useDictionary from '@/locales/dictionary-hook'

export default function Register() {
  const router = useRouter()
  const dict = useDictionary()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const register = async (formData: FormData) => {
    setSubmitting(true)

    try {
      const res: Response = await fetch('http://localhost:8000/register/', {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          role: 'ANONYMOUS',
          password: formData.get('password'),
        }),
      })

      if (!res) {
        setError('Register failed')
        return
      }

      const { ok } = res

      if (!ok) {
        setError('Register failed')
        return
      }

      // Redirect on success
      router.push('/login')
      // redirect('/login')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Alert variant="danger" show={error !== ''} onClose={() => setError('')} dismissible>{error}</Alert>
      <Form action={register}>
        <InputGroup className="mb-3">
          <InputGroupText>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          </InputGroupText>
          <FormControl
            type="email"
            name="email"
            disabled={submitting}
            placeholder={dict.signup.form.email}
            aria-label="Email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroupText>
          <FormControl
            type="password"
            name="password"
            disabled={submitting}
            placeholder={dict.signup.form.password}
            aria-label="Password"
          />
        </InputGroup>

        <Button type="submit" className="d-block w-100" disabled={submitting} variant="success">
          {dict.signup.form.submit}
        </Button>
      </Form>
    </>
  )
}
