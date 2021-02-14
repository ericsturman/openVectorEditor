import { MenuItem } from "@blueprintjs/core";
import useLocalStorageState from "use-local-storage-state";
import React from "react";
import { toggleShowMeltingTemp } from "../redux/showMeltingTemp";

export const fullSequenceTranslationMenu = {
  text: "Full Sequence Translation",
  cmd: "fullSequenceTranslations",
  submenu: [
    {
      shouldDismissPopover: false,
      cmd: "sequenceAA_allFrames",
      text: "All Frames"
      // frameNumber: "all" // TODO ?
    },
    {
      shouldDismissPopover: false,
      cmd: "sequenceAA_frame1",
      text: "Frame 1"
      // frameNumber: 1 // TODO ?
    },
    {
      shouldDismissPopover: false,
      cmd: "sequenceAA_frame2",
      text: "Frame 2"
      // frameNumber: 2 // TODO ?
    },
    {
      shouldDismissPopover: false,
      cmd: "sequenceAA_frame3",
      text: "Frame 3"
      // frameNumber: 3 // TODO ?
    },
    {
      shouldDismissPopover: false,
      cmd: "sequenceAAReverse_allFrames",
      text: "All Reverse Frames"
      // frameNumber: "all" // TODO ?
    },
    {
      shouldDismissPopover: false,
      cmd: "sequenceAAReverse_frame1",
      text: "Frame -1"
      // frameNumber: 1 // TODO ?
    },
    {
      shouldDismissPopover: false,
      cmd: "sequenceAAReverse_frame2",
      text: "Frame -2"
      // frameNumber: 2 // TODO ?
    },
    {
      shouldDismissPopover: false,
      cmd: "sequenceAAReverse_frame3",
      text: "Frame -3"
      // frameNumber: 3 // TODO ?
    }
  ]
};
export default [
  // { cmd: "mapCaret" },
  { cmd: "showAll", shouldDismissPopover: false },
  { cmd: "hideAll", shouldDismissPopover: false },
  { cmd: "toggleWarnings", shouldDismissPopover: false },
  { cmd: "toggleAssemblyPieces", shouldDismissPopover: false },
  { cmd: "toggleLineageAnnotations", shouldDismissPopover: false },
  //deprecating
  //{ cmd: "toggleFeatures", shouldDismissPopover: false },
  {
    cmd: "toggleFeatures",
    onClick: () => {}, //override this click so that they have to hit the submenu
    shouldDismissPopover: false,
    submenu: [
      {
        cmd: "toggleFeatures",
        shouldDismissPopover: false
      },
      {
        cmd: "featureTypesCmd",
        shouldDismissPopover: false
      },
      {
        cmd: "filterFeatureLengthsCmd",
        shouldDismissPopover: false
      }
    ]
  },
  {
    cmd: "toggleTranslations",
    onClick: () => {}, //override this click so that they have to hit the submenu
    shouldDismissPopover: false,
    submenu: [
      {
        cmd: "toggleTranslations",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleCdsFeatureTranslations",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleOrfTranslations",
        shouldDismissPopover: false
      },
      { cmd: "toggleAminoAcidNumbers_dna", shouldDismissPopover: false }
    ]
  },
  { cmd: "togglePrimers", shouldDismissPopover: false },
  // {
  //   // TODO preprocess this as needed
  //   cmd: "featureTypes",
  //   itemId: "featureTypes",
  //   //submenu of checklist of all feature types here
  //   submenu: [{ text: "TO DO...", disabled: true }]
  // },
  {
    cmd: "togglePartsWithSubmenu",
    onClick: () => {},
    shouldDismissPopover: false
  },
  { cmd: "toggleCutsites", shouldDismissPopover: false },
  // TODO translations, cds feature translations?
  {
    cmd: "toggleOrfs",
    onClick: () => {}, //override this click so that they have to hit the submenu
    shouldDismissPopover: false,
    submenu: [
      {
        cmd: "toggleOrfs",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleOrfTranslations",
        shouldDismissPopover: false
      },
      {
        cmd: "useGtgAndCtgAsStartCodons",
        shouldDismissPopover: false
      },
      {
        cmd: "minOrfSizeCmd",
        shouldDismissPopover: false
      }
    ]
  },
  // { cmd: "complementary" },
  // { cmd: "spaces" },
  { divider: "" },
  {
    cmd: "toggleShowGCContent",
    shouldDismissPopover: false,
    text: "Percent GC Content of Selection"
  },
  <ToggleShowMeltingTemp key="ToggleShowMeltingTemp"></ToggleShowMeltingTemp>,
  // {
  //   shouldDismissPopover: false,
  //   // text: "Melting Temp of Selection",
  //   component: function ToggleShowMeltingTemp(props) {
  //     console.log(`props:`,props)
  //     const [showMeltingTemp, setShowMeltingTemp] = useLocalStorageState(
  //       "showMeltingTemp"
  //     );
  //     return (
  //       <MenuItem
  //       children="Show Melting Temp of Selection"
  //         text="Show Melting Temp of Selection"
  //         onClick={() => {
  //           setShowMeltingTemp(!showMeltingTemp);
  //         }}
  //         icon={'small-tick'}
  //         // icon={showMeltingTemp ? "small-tick" : "blank"}
  //       ></MenuItem>
  //     );
  //   }
  // },
  {
    text: "Sequence Case",
    cmd: "sequenceCase",
    submenu: [
      {
        cmd: "toggleSequenceMapFontUpper",
        text: "Upper Case",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleSequenceMapFontRaw",
        text: "No Preference",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleSequenceMapFontLower",
        text: "Lower Case",
        shouldDismissPopover: false
      }
    ]
  },
  { divider: "" },
  fullSequenceTranslationMenu,
  { divider: "" },

  { cmd: "toggleAxis", shouldDismissPopover: false },
  { cmd: "toggleAxisNumbers", shouldDismissPopover: false },
  {
    cmd: "toggleAminoAcidNumbers_protein",
    shouldDismissPopover: false
  },
  { cmd: "toggleSequence", shouldDismissPopover: false },
  { cmd: "toggleReverseSequence", shouldDismissPopover: false },
  { cmd: "toggleDnaColors", shouldDismissPopover: false },

  { divider: "" },
  {
    text: "Labels",
    submenu: [
      { cmd: "toggleFeatureLabels", shouldDismissPopover: false },
      { cmd: "togglePartLabels", shouldDismissPopover: false },
      { cmd: "toggleCutsiteLabels", shouldDismissPopover: false },

      { divider: "" },

      { cmd: "toggleExternalLabels", shouldDismissPopover: false },
      { cmd: "adjustLabelLineIntensity", shouldDismissPopover: false },
      { cmd: "adjustLabelSize", shouldDismissPopover: false }
    ]
  }
];

function ToggleShowMeltingTemp(props) {
  console.log(`props:`,props)
  const [showMeltingTemp, setShowMeltingTemp] = useLocalStorageState(
    "showMeltingTemp"
  );
  return (
    <MenuItem
    children="Show Melting Temp of Selection"
      text="Show Melting Temp of Selection"
      onClick={() => {
        setShowMeltingTemp(!showMeltingTemp);
      }}
      icon={'small-tick'}
      // icon={showMeltingTemp ? "small-tick" : "blank"}
    ></MenuItem>
  );
}
