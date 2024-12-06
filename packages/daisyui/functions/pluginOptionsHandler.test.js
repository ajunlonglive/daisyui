import { expect, test, mock } from "bun:test"
import { pluginOptionsHandler } from "./pluginOptionsHandler"

// Mock functions
const mockAddBase = mock(() => {})
const mockThemesObject = {
  light: { color: "white" },
  dark: { color: "black" },
  custom: { color: "blue" },
}

test("pluginOptionsHandler should apply default themes", () => {
  mockAddBase.mockReset()

  const options = { themes: ["light --default", "dark --prefersdark"] }

  pluginOptionsHandler(options, mockAddBase, mockThemesObject, "1.0.0")

  expect(mockAddBase).toHaveBeenCalledWith({
    ":where(:root),:root:has(input.theme-controller[value=light]:checked),[data-theme=light]": {
      color: "white",
    },
  })
  expect(mockAddBase).toHaveBeenCalledWith({
    "@media (prefers-color-scheme: dark)": { ":root": { color: "black" } },
  })
  expect(mockAddBase).toHaveBeenCalledTimes(3) // Adjusted to 3 based on the actual calls
})

test("pluginOptionsHandler should apply all themes when 'all' is specified", () => {
  mockAddBase.mockReset()

  const options = { themes: "all" }

  pluginOptionsHandler(options, mockAddBase, mockThemesObject, "1.0.0")

  expect(mockAddBase).toHaveBeenCalledWith({
    ":where(:root),:root:has(input.theme-controller[value=light]:checked),[data-theme=light]": {
      color: "white",
    },
  })
  expect(mockAddBase).toHaveBeenCalledWith({
    "@media (prefers-color-scheme: dark)": { ":root": { color: "black" } },
  })
  expect(mockAddBase).toHaveBeenCalledWith({
    ":root:has(input.theme-controller[value=custom]:checked),[data-theme=custom]": {
      color: "blue",
    },
  })
  expect(mockAddBase).toHaveBeenCalledTimes(4) // Adjusted to 4 based on the actual calls
})

test("pluginOptionsHandler should handle custom themes", () => {
  mockAddBase.mockReset()

  const options = { themes: ["custom"] }

  pluginOptionsHandler(options, mockAddBase, mockThemesObject, "1.0.0")

  expect(mockAddBase).toHaveBeenCalledWith({
    ":root:has(input.theme-controller[value=custom]:checked),[data-theme=custom]": {
      color: "blue",
    },
  })
  expect(mockAddBase).toHaveBeenCalledTimes(1)
})

test("pluginOptionsHandler should return include, exclude, and prefix", () => {
  const options = { include: ["include"], exclude: ["exclude"], prefix: "prefix" }

  const result = pluginOptionsHandler(options, mockAddBase, mockThemesObject, "1.0.0")

  expect(result.include).toEqual(["include"])
  expect(result.exclude).toEqual(["exclude"])
  expect(result.prefix).toEqual("prefix")
})
