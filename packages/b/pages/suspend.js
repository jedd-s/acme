// import {version} from 'react-dom'

import {useCachedPromise} from '../components/promise-cache'

import {usePushTransition} from '../components/hooks'
import {Suspense} from 'react'

function Suspender({thrown = false}) {
    useCachedPromise(
        'suspend',
        () => new Promise((resolve) => setTimeout(resolve, 200)),
        thrown,
    )
    return (
        <div>
            <h4>Suspender Content</h4>
        </div>
    )
}

const HomeLink = () => {
    const [isPending, push] = usePushTransition()
    return (
        <div>
            <h2
                role="button"
                id="react-dom-version"
                style={{color: 'blue'}}
                onClick={() => {
                    push('/')
                }}>
                Home
            </h2>
        </div>
    )
}

export default function Suspend() {
    const [isPending, push] = usePushTransition()

    return (
        <div>
            <Suspense fallback={'Transtion Home...'}>
                <HomeLink />
            </Suspense>
            <Suspense fallback={'Loading Suspender...'}>
                <Suspender />
            </Suspense>
        </div>
    )
}
