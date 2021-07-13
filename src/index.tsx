import { FunctionComponent, useEffect } from 'react'

interface Options {
  icon:
    | 'btc'
    | 'eth'
    | 'bch'
    | 'bnb'
    | 'trx'
    | 'doge'
    | 'xmr'
    | 'ltc'
    | 'eth'
    | 'usdt'
  button_color?: string
  hide_bubble?: boolean
  hide_donate_text?: boolean
  donate_text?: string
  button_image?: string
}

interface Props {
  username: string
  options: Options
}

/*
 * Sendacoin hook to inject embed script to DOM
 */

const useSendacoin = ({
  username,
  options,
}: {
  username: string
  options?: Options
}) => {
  useEffect(() => {
    // @ts-ignore
    if (window.__sendacoin_injected__) return
    // @ts-ignore
    window.__sendacoin_injected__ = true

    const script = document.createElement('script')
    script.src = `https://sendacoin.to/embed.js`
    script.defer = true
    script.setAttribute('data-username', username)

    if (options) {
      Object.keys(options).forEach((key) => {
        // @ts-ignore
        script.setAttribute(`data-${key.replaceAll('_', '-')}`, options[key])
      })
    }

    const onScriptError = () => script.remove()
    script.addEventListener('error', onScriptError)

    document.body.appendChild(script)
  }, [])

  return null
}

/*
 * Sendacoin component
 */

const SendACoin: FunctionComponent<Props> = ({ username, options }) => {
  useSendacoin({ username, options })

  return null
}

export default SendACoin
