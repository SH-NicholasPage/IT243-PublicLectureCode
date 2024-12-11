<template>

</template>

<script>
export default {
  name: "AddUpdateForm"
};
</script>

<style scoped>
.form-wrapper
{
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  /* flex allows us to center the form
   horizontally and vertically */
  justify-content: center;
  align-items: center;
}

form
{
  background: white;
  min-width: 60vw;
  min-height: 40vh;
  padding: 2rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
}

form > div
{
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  font-size: 1.6rem;
}

form input, select
{
  margin: 0.6rem 0;
  padding: 0.6rem 1rem;
  border: 1px lightgrey solid;
  border-radius: 0.3rem;
  font-size: 16px;
}

form button
{
  background: rgb(123, 194, 123);
  width: 100px;
  border: none;
  padding: 0.6rem;
  border-radius: 0.3rem;
  font-size: 16px;
}

.close
{
  align-self: flex-end;
  cursor: pointer;
}
</style>