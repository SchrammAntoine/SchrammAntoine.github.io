<script>
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("DOI copied to clipboard");
  });
}
</script>