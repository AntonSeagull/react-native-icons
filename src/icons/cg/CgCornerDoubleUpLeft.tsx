

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgCornerDoubleUpLeft = (props: IconProps) => {

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
          <Path  d="M9.25045 7.78369L7.83624 6.36948L3.59363 10.6121L7.83627 14.8547L9.25048 13.4405L6.42205 10.6121L9.25045 7.78369Z" fill="currentColor" />
          <Path  d="M13.4932 13.4405L12.0789 14.8547L7.83627 10.6121L12.0789 6.36948L13.4931 7.78369L11.6463 9.63049L16.4063 9.63049C18.6155 9.63049 20.4063 11.4214 20.4063 13.6305L20.4063 17.6305L18.4063 17.6305L18.4063 13.6305C18.4063 12.5259 17.5109 11.6305 16.4063 11.6305L11.6831 11.6305L13.4932 13.4405Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

