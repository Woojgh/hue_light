from phue import Bridge
import time

IP = 'current ip at location
'
b = Bridge(IP)

test = b.get_light(1)

print(test)

b.create_group('1', [1])
# Turns light on
b.set_group([1], 'on', True)
# gets the bridge state
b.get_api()
# Prints if light 1 is on or not
b.get_light(1, 'on')

# Set brightness of lamp 1 to max
b.set_light(1, 'bri', 254)
# Get the name of a lamp
b.get_light(1, 'name')
# The set_light method can also take a dictionary as the second argument to do more fancy stuff
# This will turn light 1 on with a transition time of 30 seconds
command =  {'transitiontime' : 300, 'on' : True, 'bri' : 254}
b.set_light(1, command)
#set to specific color
command_on2 = {'transitiontime' : 0, 'on' : True, 'xy' : [0.1768, 0.0557], 'sat' : 243, 'hue' : 47050}
b.set_group(1, command_on2)