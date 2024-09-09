import { View } from 'react-native'
import React from 'react'
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { GluestackUIProvider, Text, Box, ButtonText, Button, Heading, VStack } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogFooter,
    AlertDialogBody,
  } from '@/components/ui/alert-dialog';

export default function Hrms() {
    // button from gluestack
    const [showAlertDialog, setShowAlertDialog] = React.useState(false)
    const handleClose = () => setShowAlertDialog(false)
  return (
    <>
        <View>
        {/* <GluestackUIProvider config={config}>
                <Box width="100%" justifyContent="center" alignItems="center">
                    <Text>Open up App.js to start working on your app!</Text>
                </Box>
                
                <Progress value={40} className="w-[300px]" size="md"  >
                    <ProgressFilledTrack />
                </Progress>
            </GluestackUIProvider> */}

<Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Are you sure you want to delete this post?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm">
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </View>
    </>
  )
}

