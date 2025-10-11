

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaBandAid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 640 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 160v192c0 35.3 28.7 64 64 64h96V96H64c-35.3 0-64 28.7-64 64zm576-64h-96v320h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zM192 416h256V96H192v320zm176-232c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-96-96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24z" />
        </G>
      </Svg>
    );
  }

