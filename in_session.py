#!/usr/bin/python
import tkinter
import tkinter.messagebox
from tkinter import *
root = tkinter.Tk()



class App:
    
    frame = Frame(root, width=100, height=100)
    frame.pack()

    def __init__(self, master):

        self.message = Label(frame, text='Recording not in session.')
        self.message.pack()
        self.record_button = Button(frame, text="Start Recording", command=self.stopRecording)
        self.record_button.pack(side=RIGHT)

        self.button = Button(
            frame, text="QUIT", fg="red", command=frame.quit
            )
        self.button.pack(side=LEFT)

    def stopRecording(self):
        self.record_button.config(text="Stop Recording", command=self.startRecording)
        self.message.config(text='Recording is now in session. Please remain quiet.')
    def startRecording(self):
        self.record_button.config(text="Start Recording", command=self.stopRecording)
        self.message.config(text='Recording not in session.')

        # messagebox.showinfo("Recording in Session","Recording is in session")


app = App(root)

root.mainloop()