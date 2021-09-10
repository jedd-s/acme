// import {version} from 'react-dom'

import {Suspense} from 'react'
import {usePushTransition} from '../components/hooks'

const SuspendLink = () => {
    const [isPending, push] = usePushTransition()
    return (
        <div>
            <h2
                role="button"
                id="react-dom-version"
                style={{color: 'blue'}}
                onClick={() => {
                    push('/suspend')
                }}>
                Suspend
            </h2>
        </div>
    )
}

const Title = ({children}) => (
    <div>
        <h2 id="title">{children}</h2>
    </div>
)

export default function Index() {
    return (
        <div>
            <Title>Home</Title>
            <Suspense fallback={'Transition Suspender...'}>
                <SuspendLink />
            </Suspense>
        </div>
    )
}
