import {useCachedPromise} from '../components/promise-cache'

import {useRouter} from 'next/router'
import {useTransition} from 'react'

export const usePushTransition = () => {
    const {push} = useRouter()
    const [isPending, startTransition] = useTransition()
    const transitionTo = (route, options = null) => {
        startTransition(() => {
            push(route, route)
        })
    }

    return [isPending, transitionTo]
}
