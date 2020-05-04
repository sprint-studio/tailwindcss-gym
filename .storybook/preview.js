import { addDecorator } from "@storybook/html";

const classList ='h-screen flex justify-center items-center';
addDecorator(storyFn => {
    const wrapper = document.createElement('div');
    wrapper.classList = classList;
    wrapper.innerHTML = storyFn();

    return wrapper;
});