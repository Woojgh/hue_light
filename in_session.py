#!/usr/bin/python
import tkinter
import tkinter.messagebox
from tkinter import *
root = tkinter.Tk()



class App:
    

    def __init__(self, master):

        frame = Frame(master)
        frame.pack()

        self.a = Button(frame, text="Record", command=self.Recording)
        self.a.pack(side=RIGHT)

        self.button = Button(
            frame, text="QUIT", fg="red", command=frame.quit
            )
        self.button.pack(side=LEFT)

        self.hi_there = Button(frame, text="Hello", command=self.say_hi)
        self.hi_there.pack(side=LEFT)


    def say_hi(self):
        print ("hi there, everyone!")


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