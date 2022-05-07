export default class SizeHelper {
  static isMobile(width: number | undefined): boolean {
    return width !== undefined && width < 768
  }

  static isDesktop(width: number | undefined): boolean {
    return width !== undefined && width > 1024
  }
}
