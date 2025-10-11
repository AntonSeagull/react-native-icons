

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCommandBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z" />
        </G>
      </Svg>
    );
  }

