const { localStorage } = window

function set (key, value, ttl = null) {
  const currentTime = Math.floor(Date.now() / 1000)
  const valueWithMetadata = {
    value,
    expireTime: (ttl !== null) ? (currentTime + ttl) : null
  }
  const valueString = JSON.stringify(valueWithMetadata)

  localStorage.setItem(key, valueString)
}

function get (key, defaultValue = null) {
  const valueString = localStorage.getItem(key)

  if (valueString === null) {
    return defaultValue
  }

  const currentTime = Math.floor(Date.now() / 1000)
  const valueWithMetadata = JSON.parse(valueString)

  if (
    (valueWithMetadata.expireTime !== null) &&
    (valueWithMetadata.expireTime <= currentTime)
  ) {
    localStorage.removeItem(key)
    return defaultValue
  }

  return valueWithMetadata.value
}

function remove (key) {
  localStorage.removeItem(key)
}

const storage = {
  set,
  get,
  remove
}

export default storage
