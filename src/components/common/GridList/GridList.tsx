import { Col, Row } from "react-bootstrap";

// ################################## Render Props Pattern
type Props<TRecord> = {
   records: TRecord[];
   renderItem: (record: TRecord) => React.ReactNode;
};
type THasId = {
   id?: number;
};

const GridList = <T extends THasId>({ records, renderItem }: Props<T>) => {
   // ################### CONTENT ###################
   const list =
      records.length > 0
         ? records.map((record) => (
              <Col
                 xs={3}
                 key={record.id}
                 className="d-flex justify-content-center mb-5 mt-2"
              >
                 {renderItem(record)}
              </Col>
           ))
         : "There are no items";

   return <Row>{list}</Row>;
};

export default GridList;
