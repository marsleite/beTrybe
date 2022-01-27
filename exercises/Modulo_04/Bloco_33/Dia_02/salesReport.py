from abc import abstractmethod
import csv
import json
import csv
from msilib.schema import Class


class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file



    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


    def serialize(self):
        with open(self.export_file,'w') as file:
            json.dump(self.build(), file)

    class SalesReportJSON(SalesReport):
        def serialize(self):
            with open(self.export_file + '.json', 'w') as file:
                json.dump(self.build(), file)


    class SalesReportCSV(SalesReport):
        def serialize(self):
            with open(self.export_file):
                csv.DictReader(self.export_file)