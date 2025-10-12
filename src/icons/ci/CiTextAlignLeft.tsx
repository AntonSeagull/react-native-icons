

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiTextAlignLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M20.438,4.063H3.563a.5.5,0,1,1,0-1H20.438a.5.5,0,1,1,0,1Z" />
          <Path  d="M12.562,8.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
          <Path  d="M12.562,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" />
          <Path  d="M20.436,12.5H3.562a.5.5,0,1,1,0-1H20.436a.5.5,0,0,1,0,1Z" />
          <Path  d="M20.436,20.937H3.562a.5.5,0,0,1,0-1H20.436a.5.5,0,0,1,0,1Z" />
        </G>
      </Svg>
    );
  }

