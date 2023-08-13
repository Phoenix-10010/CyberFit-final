import { useAppStore } from "../store/app-store"

export default function Checkbox({ item, onChange }) {
  // Get checklists state and setChecklists function from app store
  const checklists = useAppStore(state=>state.checklists)
  const setChecklists = useAppStore(state=>state.setChecklists)

  // Handle checkbox click
  const handleCheck = async () => {
    const selected =  !Boolean(checklists[item.id])
    const payload = {
      checklistId: item.id,
      selected
    }
    await onChange(payload)
    changeItemState(payload)
  }


  // Change item state
  const changeItemState = ({ checklistId, selected }) => {
    const newChecklists = { ...checklists }
    newChecklists[checklistId] = selected
    setChecklists(newChecklists)
  }

  // Render checkbox
  return (
    <label>
      <input
        type="checkbox"
        checked={Boolean(checklists[item.id])}
        onChange={handleCheck}
      />
      {item.requirement}
    </label>
  );
};
