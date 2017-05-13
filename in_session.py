#!/usr/bin/python
import tkinter
import tkinter.messagebox
from tkinter import *
root = tkinter.Tk()



class App:
    

    def __init__(self, master):

        frame = Frame(master)
        frame.pack()
        self.message = Label(frame, text='Recording not in session')
        self.record_button = Button(frame, text="Start Recording", command=self.stopRecording)
        self.record_button.pack(side=RIGHT)

        self.button = Button(
            frame, text="QUIT", fg="red", command=frame.quit
            )
        self.button.pack(side=LEFT)

    def stopRecording(self):
        self.record_button.config(text="Stop Recording", command=self.startRecording)
        
    def startRecording(self):
        self.record_button.config(text="Start Recording", command=self.stopRecording)
app = App(root)

root.mainloop()