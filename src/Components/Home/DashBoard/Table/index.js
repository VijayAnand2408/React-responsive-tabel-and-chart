import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {
    TableCell,
    TablePagination,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
} from '@material-ui/core';

import { storeRevenueData,filteredData } from '../../../../store/action/revenueAction'

function RevenueTable() {
    const { revenueData, filterType } = useSelector(state => state.revenue);
    const [revenueTableDate, setRevenueTableDate] = useState([])
    const [filterRevenueTableData, setFilterRevenueTableDate]= useState([])
    const [totalRows, setTotalRows] = useState(0)
    const [dataRowPerPage, setDataRowPerPage] = useState(10)
    const [Page, setPage] = useState(0)
    const dispatch = useDispatch();


    const setDataPagination = () => {
        const pageStaringIndex = Page * dataRowPerPage;
        const slicedData = filterRevenueTableData.slice(pageStaringIndex, pageStaringIndex + dataRowPerPage)
        setRevenueTableDate(slicedData)
    }

    useEffect(() => {
        setDataPagination()
    }, [])

    useEffect(() => {
        setDataPagination()
    }, [Page, dataRowPerPage,filterRevenueTableData])

    useEffect(() => {
        setRevenueTableDate(revenueData.slice(0, dataRowPerPage))
    }, [revenueData])

    useEffect(() => {
        setPage(0)
        setDataRowPerPage(10)
        setFilterRevenueTableDate([])
        if ((filterType === '' || filterType === 'All Renenue Type')) {
            setFilterRevenueTableDate(revenueData);
        } else {
            const filteredDataArr = [];
            revenueData.length > 0 && revenueData?.map((row) => {
                if (row?.revenue_type === filterType) {
                    filteredDataArr.push(row);
                }
            })
            setFilterRevenueTableDate(filteredDataArr);
        }
    }, [filterType])

    useEffect(() => {
       dispatch(filteredData(filterRevenueTableData))
    }, [filterRevenueTableData])
    

    useEffect(() => {
        if (revenueTableDate.length === 0) {
            axios.get('http://fetest.pangeatech.net/data').then((response) => {
                dispatch(storeRevenueData(response.data));
                setTotalRows(response.data.length)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    return (
        <Grid style={{marginTop:'10rem',marginBottom:'10rem'}}>
            <TableContainer >
                <Table>
                    <TableHead style={{background: '#0E86D4'}}>
                        <TableRow>
                            <TableCell>S No.</TableCell>
                            <TableCell>Line of Business</TableCell>
                            <TableCell>Revenue Type</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Posting Period</TableCell>
                            <TableCell>ACV</TableCell>
                            <TableCell>TCV</TableCell>
                            <TableCell>Revenue</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {revenueTableDate.length > 0 && revenueTableDate?.map((row, index) => (
                            // ((filterType === '' || filterType === 'All Renenue Type') || row.revenue_type === filterType) && (
                            <TableRow key={index}>
                                <TableCell>
                                    {row?.S_no}
                                </TableCell>
                                <TableCell>{row?.line_of_business}</TableCell>
                                <TableCell>{row?.revenue_type}</TableCell>
                                <TableCell>{row?.product}</TableCell>
                                <TableCell>{row?.month} - {row?.year}</TableCell>
                                <TableCell>{row?.acv}</TableCell>
                                <TableCell>{row?.tcv}</TableCell>
                                <TableCell>{row?.revenue}</TableCell>
                            </TableRow>
                            // )
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 30, 90]}
                component="div"
                count={filterRevenueTableData.length}
                rowsPerPage={dataRowPerPage}
                page={Page}
                onChangePage={(event, newPage) => setPage(newPage)}
                onChangeRowsPerPage={(event) => { setPage(0); setDataRowPerPage(parseInt(event.target.value, 10)); }}
            />
        </Grid>
    )
}

export default RevenueTable