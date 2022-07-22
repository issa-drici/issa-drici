export const toastSuccess = (toast, { title, description }) => {
  return (
    toast({
      title: title,
      description: description,
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top-right'
    })
  )
}
