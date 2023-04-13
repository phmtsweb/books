export class Container {
  private static instances: Map<string, any> = new Map()

  static register<T>(key: string, instance: T) {
    this.instances.set(key, instance)
  }

  static registerSingleton<T>(key: string, instance: T) {
    if (!this.instances.has(key)) {
      this.instances.set(key, instance)
    }
  }

  static get<T>(key: string): T {
    return this.instances.get(key)
  }

  static resolve<T>(key: string): T {
    const instance = this.get<T>(key)

    if (!instance) {
      throw new Error(`Instance not found for key: ${key}`)
    }

    return instance
  }
}
