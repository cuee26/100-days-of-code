import os
global beginning_directory
global structure


def build_tree():
    rootDir = '.'
    path = "/home/intern-chieto/Documents/chieto/B/"
    path_split = path.split("/")
    figure = len(path_split)
    dirr = {path_split[figure - 2]: {}}
    beginning_directory = dirr[path_split[figure - 2]]
    list_of_next_dir = [path_split[figure - 2]]
    structure = ""
    for dirName, subdirList, fileList in os.walk(path):
        paths = dirName.split("/")
        list_of_next_dir = [path_split[figure - 2]]
        for pathh in paths:
            if paths.index(pathh) < figure - 1:
                pass
            else:
                list_of_next_dir.append(str(pathh))
        try:
            obj = {}
            for next_dir in range(len(list_of_next_dir)):
                if next_dir == 0:
                    obj = dirr[list_of_next_dir[next_dir]]
                if next_dir > 0:
                    obj = obj[list_of_next_dir[next_dir]]
            for sub_dir in subdirList:
                obj[sub_dir] = {}
                structure += "|-----" + sub_dir + "-----" + "\n"
                for i in range(3):
                    structure += "|" + "\n"
            for files in fileList:
                obj[files] = None
                structure += "|-----" + files + "\n"
            print(obj)
            # for key in obj.keys():
            #     if obj[key] != None:
            #         structure += "|-----" + key + "-----" + "\n"
            #         for i in range(3):
            #             structure += "|" + "\n"
            #     else:
            #         structure += "|-----" + key + "\n"

        except Exception as exception:
            print(exception)

    draw_tree(beginning_directory, structure)


def draw_tree(directory, structure):
    for key in directory.keys():
        if directory[key] != None:
            structure += "|-----" + key + "-----" + "\n"
            for i in range(3):
                structure += "|" + "\n"
        else:
            structure += "|-----" + key + "\n"

    print(directory)
    print(structure)
    # draw_tree(directory, structure)


try:
    build_tree()

except Exception as exception:
    print(exception)
