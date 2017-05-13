#!/usr/bin/python
import tkinter
import tkinter.messagebox
from tkinter import *
root = tkinter.Tk()



class App:
    

    def __init__(self, master):

        frame = Frame(master)
        frame.pack()

        self.record_button = Button(frame, text="Record", command=self.Recording)
        self.record_button.pack(side=RIGHT)

        self.button = Button(
            frame, text="QUIT", fg="red", command=frame.quit
            )
        self.button.pack(side=LEFT)

    def Recording(self):
        messagebox.showinfo("Recording in Session","Recording is in session")
        # b = Button(master, text="OK", command=self.)
        # b.pack()

        # c = Button(master, text="OK", command=self.)
        # c.pack()

        # d = Button(master, text="OK", command=self.)
        # d.pack()

# w = Message(root, text="this is a message")
# w.pack()

app = App(root)

root.mainloop()