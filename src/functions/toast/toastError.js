export const toastError = (toast, { title, description }) => {
  return (
    toast({
      title: title,
      description: description,
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: 'top-right'
    })
  )
}
