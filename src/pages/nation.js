import React from 'react'

function Nation() {
    return (
        <div className="container bg-info" style={{ height: '90vh' }}>
            <div class="container h-100 bg-primary">
                <div className="row g-3 h-75">
                    <div className="col-8">
                        <div className="row g-3 h-100">
                            <div className="col-6">
                                <div class="p-3 h-100 w-100 bg-primary border bg-light">Row column</div>
                            </div>

                            <div className="col-6">
                                <div class="p-3 h-100 w-100 bg-primary border bg-light">Row column</div>
                            </div>
                            <div className="col-12">
                                <div class="p-3 h-100 w-100 bg-primary border bg-light">Row column</div>

                            </div>
                        </div>
                    </div>

                    <div className="col-4 pb-3 bg-primary">
                        <div class="p-3 h-100 w-100 bg-primary border bg-light">Row column</div>
                    </div>
                </div>
                <div className="row g-3 h-25">
                    <div className="col-4">
                        <div class="p-3 h-100 w-100 bg-primary border bg-light">Row column</div>
                    </div>

                    <div className="col-4">
                        <div class="p-3 h-100 w-100 bg-primary border bg-light">Row column</div>
                    </div>

                    <div className="col-4">
                        <div class="p-3 h-100 w-100 bg-primary border bg-light">Row column</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nation