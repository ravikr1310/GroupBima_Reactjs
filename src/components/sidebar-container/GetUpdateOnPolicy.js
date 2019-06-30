import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatIcon from '../../assets/images/chaticon.png';

class GetUpdateOnPolicy extends Component {
    render() {
        return (

            <div class="sidebar-1 chat-sectinn">
                <h3>Get updates on policy</h3>
                <p>Save all your search results. Make your account
                  and get other benefits and high quality service as
            well.</p>
                <div class="my-5">
                    <div class="row">
                        <div class="col-md-12 mx-auto">
                            <div class="form-group">
                                <input type="text" id="name" class="form-control" required />
                                <label class="form-control-placeholder" for="name">Name</label>
                            </div>
                            <div class="form-group">
                                <input type="number" id="phone" class="form-control" required />
                                <label class="form-control-placeholder" for="phone">Phone Number</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkbox-agree">
                    <input type="checkbox" id="agree" class="" />
                    <label for="agree">I agree to receive notifications(calls & sms) from
                Groupbima.</label>
                </div>

                <button class="btn btn-default btn-filter">Get Updates</button>
                <span class="chat-icon"><img src={ChatIcon} alt="Chat with us" /></span>
            </div>

        );
    }
}
export default GetUpdateOnPolicy;

