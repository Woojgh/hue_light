#!/usr/bin/python

import tkinter as tk
from tkinter import *
from phue import Bridge

root = tk.Tk()
root.geometry('200x200')
# phue = Bridge('')
class App:
    
    def __init__(self, master):
        frame = tk.Frame(root)
        frame.pack(fill=BOTH, expand=True)

        bottom_buttons = tk.Frame(root, background="bisque")
        bottom_buttons.pack()

        self.message = Label(frame, text='Recording not in session.', bg='gray', fg='black')
        self.message.pack(fill=BOTH, expand=True)
        
        self.quit_button = Button(bottom_buttons, text="QUIT", fg="red", command=frame.quit)
        self.quit_button.pack(side=LEFT)
        
        self.record_button = Button(bottom_buttons, text="Start Recording", command=self.stopRecording)
        self.record_button.pack(side=LEFT)

    def stopRecording(self):
        # phue.set_light(1, 'on', True)
        self.record_button.config(text="Stop Recording", command=self.startRecording)
        self.message.config(text='Recording is now in session. Please remain quiet.', wraplength=180, justify=CENTER, bg='red', fg='white')
    def startRecording(self):
        # phue.set_light(1, 'on', False)
        self.record_button.config(text="Start Recording", command=self.stopRecording)
        self.message.config(text='Recording not in session.', bg='gray', fg='black')

# def sel(data):
#         phue.set_light([1,2,3],{'bri':int(data), 'transitiontime': 1})


app = App(root)
# scale = Scale(root, from_=254, to=0, command=sel, length=200)
# scale.set(phue.get_light(1,'bri'))
# scale.pack(anchor=CENTER)

root.mainloop()




#b.connect() If the app is not registered and the button is not pressed, press the button and call connect() 
#b.get_api() lists controls for light
#b.get_light(1, 'on') checks to see if light 1 is on
#b.set_light(1, 'bri', 254) set light brightness to max. half is 127 etc
#b.set_light(1,'on', True) turns light 1 on