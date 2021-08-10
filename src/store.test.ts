import * as store from "./store"
// @ponicode
describe("store.initializeStore", () => {
    test("0", () => {
        let callFunction: any = () => {
            store.initializeStore(undefined, { isServer: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            store.initializeStore(undefined, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            store.initializeStore(undefined, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            store.initializeStore(undefined, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            store.initializeStore(undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
