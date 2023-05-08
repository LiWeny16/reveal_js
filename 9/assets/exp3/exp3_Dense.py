import os
os.environ['KMP_DUPLICATE_LIB_OK']='True'

import csv  # 用于读取 csv 文件 #
import matplotlib.pyplot as plt  # 用于绘图 #
import numpy as np
import tensorflow

def read_all(filename):
    data = []
    with open(filename) as csvfile:
        csv_reader = csv.reader(csvfile)
        for row in csv_reader:
            data.append(row)
    for i in range(len(data)):
        for j in range(len(data[0])):
            data[i][j] = float(data[i][j])
    return data

train_data = np.array(read_all(r'.\Train_data.csv'))
test_data1 = np.array(read_all(r'.\Test_data1.csv'))
# test_data2 = np.array(read_all(r'.\Test_data2.csv'))

normal_train_data = train_data - np.min(train_data,axis=0)
normal_train_data = normal_train_data / (np.max(train_data,axis=0)-np.min(train_data,axis=0))
normal_test_data = test_data1 - np.min(train_data,axis=0)
normal_test_data = normal_test_data / (np.max(train_data,axis=0)-np.min(train_data,axis=0))
print(normal_test_data.shape)

layer_0 = tensorflow.keras.layers.Input(31)
layer_1 = tensorflow.keras.layers.Dense(24)(layer_0)
layer_2 = tensorflow.keras.layers.Dense(16)(layer_1)
layer_3 = tensorflow.keras.layers.Dense(8)(layer_2)
layer_4 = tensorflow.keras.layers.Dense(4)(layer_3)
layer_5 = tensorflow.keras.layers.Dense(8)(layer_4)
layer_6 = tensorflow.keras.layers.Dense(16)(layer_5)
layer_7 = tensorflow.keras.layers.Dense(24)(layer_6)
layer_8 = tensorflow.keras.layers.Dense(31)(layer_7)
model = tensorflow.keras.models.Model(layer_0, layer_8)
model.summary()
model.compile(optimizer = 'adam', loss = 'mean_squared_error')
history = model.fit(normal_train_data, normal_train_data, epochs = 50, batch_size = 40)

Y_train = np.array(model.predict(normal_train_data))
Y_test = np.array(model.predict(normal_test_data))

train_loss = np.sum((Y_train-normal_train_data)**2,axis=1)
test_loss = np.sum((Y_test-normal_test_data)**2,axis=1)

plt.figure()
plt.plot(train_loss)
plt.plot(test_loss)
plt.figure()
plt.plot(history.history['loss'])
plt.show()


def test(data, max, min, ans):
    tn = fn = tp = fp = 0
    for i in range(len(data)):
        if min < data[i] < max:
            if ans[i]:
                tn += 1
            else:
                fn += 1
        else:
            if ans[i]:
                fp += 1
            else:
                tp += 1
    return [tn, fn, tp, fp]

ANS = [True]*2000+[False]*2000
print(test(test_loss, max(train_loss), 0, ANS))