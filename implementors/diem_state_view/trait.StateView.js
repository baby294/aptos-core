(function() {var implementors = {};
implementors["diem_validator_interface"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"diem_state_view/trait.StateView.html\" title=\"trait diem_state_view::StateView\">StateView</a> for <a class=\"struct\" href=\"diem_validator_interface/struct.DebuggerStateView.html\" title=\"struct diem_validator_interface::DebuggerStateView\">DebuggerStateView</a>&lt;'a&gt;","synthetic":false,"types":["diem_validator_interface::DebuggerStateView"]}];
implementors["diem_vm"] = [{"text":"impl&lt;'block, S:&nbsp;<a class=\"trait\" href=\"diem_state_view/trait.StateView.html\" title=\"trait diem_state_view::StateView\">StateView</a>&gt; <a class=\"trait\" href=\"diem_state_view/trait.StateView.html\" title=\"trait diem_state_view::StateView\">StateView</a> for <a class=\"struct\" href=\"diem_vm/data_cache/struct.StateViewCache.html\" title=\"struct diem_vm::data_cache::StateViewCache\">StateViewCache</a>&lt;'block, S&gt;","synthetic":false,"types":["diem_vm::data_cache::StateViewCache"]}];
implementors["language_e2e_tests"] = [{"text":"impl <a class=\"trait\" href=\"diem_state_view/trait.StateView.html\" title=\"trait diem_state_view::StateView\">StateView</a> for <a class=\"struct\" href=\"language_e2e_tests/data_store/struct.FakeDataStore.html\" title=\"struct language_e2e_tests::data_store::FakeDataStore\">FakeDataStore</a>","synthetic":false,"types":["language_e2e_tests::data_store::FakeDataStore"]}];
implementors["storage_interface"] = [{"text":"impl <a class=\"trait\" href=\"diem_state_view/trait.StateView.html\" title=\"trait diem_state_view::StateView\">StateView</a> for <a class=\"struct\" href=\"storage_interface/state_view/struct.VerifiedStateView.html\" title=\"struct storage_interface::state_view::VerifiedStateView\">VerifiedStateView</a>","synthetic":false,"types":["storage_interface::state_view::VerifiedStateView"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()