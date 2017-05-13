#!/usr/bin/python
import tkinter
from tkinter import *
from phue import Bridge

root = tkinter.Tk()

#phue = Bridge('ip_of_your_bridge')
class App:
    

    def __init__(self, master):
        frame = Frame(root)
        frame.pack()

        self.message = Label(frame, text='Recording not in session.', bg='gray', fg='black')
        self.message.pack()
        
        self.quit_button = Button(frame, text="QUIT", fg="red", command=frame.quit)
        self.quit_button.pack(side=LEFT)
        
        self.record_button = Button(frame, text="Start Recording", command=self.stopRecording)
        self.record_button.pack(side=LEFT)

    def stopRecording(self):
        #phue.set_light(1, 'on', True)
        self.record_button.config(text="Stop Recording", command=self.startRecording)
        self.message.config(text='Recording is now in session. Please remain quiet.', bg='red', fg='white')
    def startRecording(self):
        #phue.set_light(1, 'on', False)
        self.record_button.config(text="Start Recording", command=self.stopRecording)
        self.message.config(text='Recording not in session.', bg='gray', fg='black')

        # messagebox.showinfo("Recording in Session","Recording is in session")


app = App(root)

horizontal_frame = Frame(root)
horizontal_frame.pack()

lights = b.get_light_objects('id')

for light_id in lights:
    channel_frame = Frame(horizontal_frame)
    channel_frame.pack(side = LEFT)

    scale_command = lambda x, light_id=light_id: b.set_light(light_id,{'bri': int(x), 'transitiontime': 1})
    scale = Scale(channel_frame, from_ = 254, to = 0, command = scale_command, length = 200, showvalue = 0)
    scale.set(b.get_light(light_id,'bri'))
    scale.pack()

    button_var = BooleanVar()
    button_var.set(b.get_light(light_id, 'on'))
    button_command = lambda button_var=button_var, light_id=light_id: b.set_light(light_id, 'on', button_var.get())
    button = Checkbutton(channel_frame, variable = button_var, command = button_command)
    button.pack()

    label = Label(channel_frame)
    label.config(text = b.get_light(light_id,'name'))
    label.pack()

root.mainloop()



#b.connect() If the app is not registered and the button is not pressed, press the button and call connect() 
#b.get_api() lists controls for light
#b.get_light(1, 'on') checks to see if light 1 is on
#b.set_light(1, 'bri', 254) set light brightness to max. half is 127 etc
#b.set_light(1,'on', True) turns light 1 on