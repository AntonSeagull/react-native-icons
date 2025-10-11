

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdAssistantDirection = (props: IconProps) => {

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
          <Path  d="M0 0h24v24H0V0z" fill="none" />
          <Path  d="M14 10H9c-.6 0-1 .4-1 1v4h2v-3h4v2.5l3.5-3.5L14 7.5V10zm-2-9C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm7.73 11.58l-7.19 7.22c-.35.27-.79.27-1.15 0L4.2 12.58c-.27-.36-.27-.8 0-1.16l7.19-7.22c.35-.27.79-.27 1.15 0l7.19 7.22c.36.27.36.8 0 1.16z" />
        </G>
      </Svg>
    );
  }

